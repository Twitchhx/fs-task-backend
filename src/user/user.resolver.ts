import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './user.types'; // Import the UserType

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserType)
  async user(@Args('userId', { type: () => Int }) userId: number) {
    return this.userService.findUserById(userId);
  }
}
