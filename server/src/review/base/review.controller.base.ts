import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ReviewService } from "../review.service";
import { ReviewCreateInput } from "./ReviewCreateInput";
import { ReviewWhereInput } from "./ReviewWhereInput";
import { ReviewWhereUniqueInput } from "./ReviewWhereUniqueInput";
import { ReviewFindManyArgs } from "./ReviewFindManyArgs";
import { ReviewUpdateInput } from "./ReviewUpdateInput";
import { Review } from "./Review";
@swagger.ApiBearerAuth()
export class ReviewControllerBase {
  constructor(
    protected readonly service: ReviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Review })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ReviewCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Review> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Review",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Review"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        customerId: data.customerId
          ? {
              connect: data.customerId,
            }
          : undefined,
      },
      select: {
        comment: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        id: true,
        stars: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Review] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ReviewFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Review[]> {
    const args = plainToClass(ReviewFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Review",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        comment: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        id: true,
        stars: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ReviewWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Review | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Review",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        comment: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        id: true,
        stars: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ReviewWhereUniqueInput,
    @common.Body()
    data: ReviewUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Review | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Review",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Review"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          customerId: data.customerId
            ? {
                connect: data.customerId,
              }
            : undefined,
        },
        select: {
          comment: true,
          createdAt: true,

          customerId: {
            select: {
              id: true,
            },
          },

          id: true,
          stars: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Review })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ReviewWhereUniqueInput
  ): Promise<Review | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          comment: true,
          createdAt: true,

          customerId: {
            select: {
              id: true,
            },
          },

          id: true,
          stars: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
