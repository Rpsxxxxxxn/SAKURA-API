import { Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put, Res } from "routing-controllers";
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
     * 経験値の取得
     * @param response 
     * @returns 
     */
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
        const experienceEntity: ExperienceEntity = await this.experienceRepository.find(id);
        const experienceDto: ExperienceDto = ExperienceModel.create(experienceEntity).responseBody();
        return response.status(200).send(experienceDto);
    }

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
        return response.status(200).send('登録が完了しました。');
    }

    /**
     * 経験値の更新
     * @param id 
     * @param body 
     * @param response 
     * @returns 
     */
    @Put('/update/:id')
    public async update(@Param('id') id: number, @Body() body: ExperienceDto, @Res() response: Response) {
        const experienceEntity: ExperienceEntity = ExperienceEntity.create(id, {
            experience: body.experience,
            createdAt: Time.create({ value: new Date().toISOString() }),
            updatedAt: Time.create({ value: new Date().toISOString() }),
        });
        await this.experienceRepository.update(experienceEntity);
        return response.status(200).send('更新が完了しました。');
    }

    /**
     * 経験値の削除
     * @param id 
     * @returns 
     */
    @Delete('/remove/:id')
    public async remove(@Param('id') id: number, @Res() response: Response) {
        this.experienceRepository.remove(id);
        return response.status(200).send('削除が完了しました。');
    }
}