import { Request, Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, Req, Res } from "routing-controllers";
import { RankingEntity } from "../domains/entities/RankingEntity";
import { RankingModel } from '../domains/models/RankingModel';
import IRankingRepository from "../domains/repositories/TopMassRankingRepository";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import RankingSQLite from "../infrastructures/sqlite/TopMassRankingSQLite";
import { TopMassRankingDto } from './dto/TopMassRankingDto';

@JsonController('/topMassRanking')
export class TopMassRankingController {
    private rankingRepository: IRankingRepository = RankingSQLite.create();

    /**
     * ランキング全取得
     * @param query 
     * @returns {Array<TopMassRankingDto>}
     */
    @Get('/findAll')
    @OnUndefined(404)
    public async findAll() {
        const rankingEntityList: Array<RankingEntity> = await this.rankingRepository.findAll();
        const rankingDtoList: Array<TopMassRankingDto> = new Array<TopMassRankingDto>;
        rankingEntityList.forEach((rankingEntity) => {
            rankingDtoList.push(RankingModel.create(rankingEntity).responseBody());
        });
        return rankingDtoList;
    }

    /**
     * ランキングの保存・更新
     * @param body 
     * @returns {void}
     */
    @Post('/insert')
    public async insert(@Body() body: TopMassRankingDto, @Res() response: Response) {
        const rankingEntity = RankingEntity.create(0, {
            gamemode: body.gamemode,
            username: UserName.create({ name: body.username }),
            mass: body.mass,
            createdAt: Time.create({value: '' }),
            updatedAt: Time.create({value: '' })
        });
        await this.rankingRepository.insert(rankingEntity);
        return response.status(200).send(body);
    }

    /**
     * ランキングの個別削除
     * @param id 
     * @returns {void}
     */
    @Delete('/remove/:id')
    public async remove(@Param('id') id: number, @Res() response: Response) {
        console.log(id);
        await this.rankingRepository.remove(id);
        return response.status(200).send(id);
    }
}