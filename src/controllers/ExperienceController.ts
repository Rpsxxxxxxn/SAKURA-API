import { Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Params, Post, QueryParams, Res } from "routing-controllers";
import { ExperienceEntity } from "../domains/entities/ExperienceEntity";
import IExperienceRepository from "../domains/repositories/ExperienceRepository";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import ExperienceSQLite from "../infrastructures/sqlite/ExperienceSQLite";
import { ExperienceDto } from './dto/ExperienceDto';

@JsonController()
export class ExperienceController {
    private experienceRepository: IExperienceRepository = ExperienceSQLite.create();

    /**
     * 経験値の設定
     * @param body 
     * @returns 
     */
    @Post('/experience')
    public async insert(@Body() body: ExperienceDto, @Res() response: Response) {
        console.log(body);
        const experienceEntity: ExperienceEntity = ExperienceEntity.create(0, {
            username: UserName.create({ name: body.username }),
            mass: body.mass,
            createdAt: Time.create({ date: '' }),
            updatedAt: Time.create({ date: '' }),
        });
        await this.experienceRepository.insert(experienceEntity);
        return response.status(200).send(body);
    }

    /**
     * 経験値の取得
     * @param id 
     * @param response 
     * @returns 
     */
    @Get('/experience/:id')
    @OnUndefined(404)
    public async find(@Param('id') id: number, @Res() response: Response) {
        console.log(id);
        return this.experienceRepository.find(id);
    }

    /**
     * 経験値の削除
     * @param id 
     * @returns 
     */
    @Delete('/experience/remove/:id')
    public async remove(@Param('id') id: number) {
        console.log(id);
        this.experienceRepository.remove(id);
        return {};
    }
}