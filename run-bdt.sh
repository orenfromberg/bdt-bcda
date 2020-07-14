#!/usr/bin/env bash

set -eo pipefail

if [ -z "$BASE_URL" ]
then
    echo "Please export BASE_URL to continue"
    exit 1
fi

if [ -z "$CLIENT_ID" ]
then
    echo "Please export CLIENT_ID to continue"
    exit 1
fi

if [ -z "$SECRET" ]
then
    echo "Please export SECRET to continue"
    exit 1
fi

RESULT=$(curl -d '' -X POST "${BASE_URL}/auth/token" --user "$CLIENT_ID":"$SECRET"  -H "accept: application/json")

if [ -z "$RESULT" ]
then
    echo "Error: unable to get token"
    exit 1
fi

TOKEN=$(echo $RESULT | jq -r .access_token) \
NODE_OPTIONS="--max-old-space-size=8192" \
BASE_URL=${BASE_URL} \
node index.js --pattern "testSuite/status.test.js"
