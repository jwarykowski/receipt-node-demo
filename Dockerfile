FROM public.ecr.aws/lambda/nodejs:18

# Copy function code
COPY ./node_modules ${LAMBDA_TASK_ROOT}
COPY app.js ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.handler" ]
