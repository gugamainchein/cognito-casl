#!/bin/bash
echo "atualizando a stack do cloudformation"
aws cloudformation deploy --template-file template.yml --stack-name cognito-casl --capabilities CAPABILITY_NAMED_IAM