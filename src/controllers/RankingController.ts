import { RankingModel } from './../domains/models/RankingModel';
import { Request, Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, QueryParams, Req, Res } from "routing-controllers";
import { RankingEntity } from "../domains/entities/RankingEntity";
import IRankingRepository from "../domains/repositories/RankingRepository";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import RankingSQLite from "../infrastructures/sqlite/RankingSQLite";
import { RankingDto } from './dto/RankingDto';

@JsonController('/ranking')
export class RankingController {
    private rankingRepository: IRankingRepository = RankingSQLite.create();

    /**
     * ランキング全取得
     * @param query 
     * @returns {Array<RankingDto>}
     */
    @Get('/findAll')
    @OnUndefined(404)
    public async findAll() {
        const datalist: Array<RankingEntity> = await this.rankingRepository.findAll();
        const result: Array<RankingDto> = new Array<RankingDto>;
        for (const data of datalist) {
            result.push(RankingModel.create(data).responseBody());
        }
        return result;
    }

    /**
     * ランキングの保存・更新
     * @param body 
     * @returns {void}
     */
    @Post('/insert')
    public async insert(@Body() body: RankingDto, @Req() request: Request, @Res() response: Response) {
        const rankingEntity = RankingEntity.create(0, {
            gamemode: body.gamemode,
            username: UserName.create({ name: body.username }),
            mass: body.mass,
            createdAt: Time.create({value: '' }),
            updatedAt: Time.create({value: '' })
        });
        await this.rankingRepository.insert(rankingEntity);
        return {};
    }

    /**
     * ランキングの個別削除
     * @param id 
     * @returns {void}
     */
    @Delete('/remove/:id')
    public async remove(@Param('id') id: number) {
        console.log(id);
        await this.rankingRepository.remove(id);
        return {};
    }
}