#!/bin/bash
echo "realizando o build dos templates para deploy"
sam-nightly build

echo "realizando o deploy dos templates no cloudformation"
sam-nightly deploy --stack-name cognito-casl --capabilities CAPABILITY_NAMED_IAM