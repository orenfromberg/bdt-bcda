#!/usr/bin/env bash

RESULT=$(curl -d '' -X POST "https://sandbox.bcda.cms.gov/auth/token" --user "$CLIENT_ID":"$SECRET"  -H "accept: application/json")

TOKEN=$(echo $RESULT | jq -r .access_token) \
NODE_OPTIONS="--max-old-space-size=8192" \
node index.js --pattern "testSuite/**/!(authorization.test.js)"
