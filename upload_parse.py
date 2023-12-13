
import json
import re
from pathlib import Path



RE_OS_VERSION = re.compile(r"(.*) \(.*\)")

envs_filename = "internalEnvs.json"
results_filename = "internalResults.json"

custom_folder = Path("./custom/")
upload_folder = Path("./upload/")

try:
    with (custom_folder / envs_filename).open("r") as f:
        envs = json.loads(f.read())
except Exception:
    print("failed to parse JSON, building envs from zero")
    envs = {}

try:
    with (custom_folder / results_filename).open("r") as f:
        results = json.loads(f.read())
except Exception:
    print("failed to parse JSON, building results from zero")
    results = {}

for child in upload_folder.iterdir():
    if child.name == ".gitignore":
        continue

    with child.open("r") as f:
        child_data = json.loads(f.read())

    es_version = child_data["esVersion"]
    os_version = child_data["osVersion"]
    player_version = child_data["playerVersion"]
    child_results = child_data["results"]

    if os_version.startswith("Windows"):
        major = player_version.split(".")[0]
        if major >= "10":
            short_version = "Windows/Linux/MacOS player >= 10"
        else:
            short_version = "Windows/Linux/MacOS player < 10"

        id_version = f"QT {player_version}"
    else:
        try:
            short_version = RE_OS_VERSION.match(os_version)[1]
        except Exception:
            short_version = os_version

        id_version = short_version

    id_version = id_version.replace(" ", "_").replace(".", "_")

    if id_env := envs.get(id_version):
        if id_env["playerversion"] > player_version:
            continue

    envs[id_version] = {
        "full": os_version,
        "short": short_version,
        "family": "",
        "release": "1970-01-01",
        "osversion": os_version,
        "playerversion": player_version,
    }

    if es_version not in results:
        results[es_version] = {}

    es_results = results[es_version]
    for child_test, child_subtests in child_results.items():
        if child_test not in es_results:
            es_results[child_test] = {"subtests": {}}

        if isinstance(child_subtests, bool):
            child_subtests = {child_test: child_subtests}
            subtest_results = es_results
        else:
            subtest_results = es_results[child_test]["subtests"]

        for child_subtest, child_value in child_subtests.items():
            if child_subtest not in subtest_results:
                subtest_results[child_subtest] = {}

            subtest_results[child_subtest][id_version] = child_value

# Redefine 'envs' in sorted order so 'json.dumps' will dump sorted values
envs = {k: envs[k] for k in sorted(envs)}

with (custom_folder / envs_filename).open("w") as f:
    f.write(json.dumps(envs, indent=2))

with (custom_folder / results_filename).open("w") as f:
    f.write(json.dumps(results, indent=2))
