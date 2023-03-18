import { Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, Res } from "routing-controllers";
import { ExperienceEntity } from "../domains/entities/ExperienceEntity";
import { ExperienceModel } from "../domains/models/ExperienceModel";
import IExperienceRepository from "../domains/repositories/ExperienceRepository";
import { Time } from "../domains/valueobjects/Time";
import ExperienceSQLite from "../infrastructures/sqlite/ExperienceSQLite";
import { ExperienceDto } from './dto/ExperienceDto';

@JsonController('/experience')
export class ExperienceController {
    private experienceRepository: IExperienceRepository = ExperienceSQLite.create();

    /**
     * 経験値の設定
     * @param body 
     * @returns 
     */
    @Post('/insert')
    public async insert(@Body() body: ExperienceDto, @Res() response: Response) {
        const experienceEntity: ExperienceEntity = ExperienceEntity.create(0, {
            experience: body.experience,
            createdAt: Time.create({ value: new Date().toISOString() }),
            updatedAt: Time.create({ value: new Date().toISOString() }),
        });
        await this.experienceRepository.insert(experienceEntity);
        return response.status(200).send(body);
    }

    @Get('/findAll')
    @OnUndefined(404)
    public async findAll(@Res() response: Response) {
        const experienceEntityList: Array<ExperienceEntity> = await this.experienceRepository.findAll();
        const experienceDtoList: Array<ExperienceDto> = new Array<ExperienceDto>();
        experienceEntityList.forEach((experienceEntity) => {
            experienceDtoList.push(ExperienceModel.create(experienceEntity).responseBody());
        });
        return response.status(200).send(experienceDtoList);
    }

    /**
     * 経験値の取得
     * @param id 
     * @param response 
     * @returns 
     */
    @Get('/find/:id')
    @OnUndefined(404)
    public async find(@Param('id') id: number, @Res() response: Response) {
        return this.experienceRepository.find(id);
    }

    /**
     * 経験値の削除
     * @param id 
     * @returns 
     */
    @Delete('/remove/:id')
    public async remove(@Param('id') id: number) {
        this.experienceRepository.remove(id);
        return {};
    }
}