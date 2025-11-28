import { Module } from '@nestjs/common';
import { FibonacciJob } from './fibonacci.job';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { JobsResolver } from './jobs.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JobsService } from './jobs.service';
import { join } from 'path';

@Module({
  imports: [
    DiscoveryModule,
    ClientsModule.register([
      {
        name: 'auth',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, 'proto/auth.proto'),
        },
      },
    ]),
  ],
  providers: [FibonacciJob, JobsResolver, JobsService],
})
export class JobsModule {}
