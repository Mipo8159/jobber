INIT -> npx create-nx-workspace --preset=nest --name jobber --appName jobber-auth
CMD -> nx <targetName> <app-name>

CMD -> npx husky init
CMD -> nx g application apps/jobs
CMD -> nx g library libs/nestjs

CMD -> nx run-many --targets serve --projects auth jobs executor -> run services in parralel
CMD -> nx run-many --target=build --projects=grpc,nestjs,pulsar,prisma -> run build in parralel
