#!/bin/bash
cd /home/kavia/workspace/code-generation/petpulse-26386-90c3e5a2/petpulse_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

