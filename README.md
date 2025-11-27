INIT -> npx create-nx-workspace --preset=nest --name jobber --appName jobber-auth
CMD -> nx <targetName> <app-name>

CMD -> npx husky init
CMD -> nx g application apps/jobs
CMD -> nx g library libs/nestjs

CMD -> nx run-many --targets serve --projects auth jobs executor -> run services in parralel
CMD -> nx run-many --target=build --projects=grpc,nestjs,pulsar,prisma -> run build in parralel

CMD -> protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./types ./proto/\*.proto --ts_proto_opt=nestJs=true

PACKAGE.JSON (Add global nx target)
"scripts": {
"generate-ts-proto": "protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./types ./proto/\*.proto --ts_proto_opt=nestJs=true --ts_proto_opt=exportCommonSymbols=false"
}

"nx": {
"targets": {
"generate-ts-proto": {
"inputs": [
"{workspaceRoot}/proto/*.proto"
],
"cache": true
}
}
},
