//Should push tags
//"postVersionCommand": "git push origin --tags",
//should run preid beta when used in branch beta-release
//--preid=beta 

commands
first release no tags
npx nx release --first-release --verbose
next releases
npx nx release --preid=beta --verbose


npx nx release --projects=app-a --preid=beta  --verbose


npx nx affected --target=release --base=origin/main --head=HEAD
