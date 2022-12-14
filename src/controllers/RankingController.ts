import { Request, Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, QueryParams, Req, Res } from "routing-controllers";
import { RankingEntity } from "../domains/entities/RankingEntity";
import IRankingRepository from "../domains/repositories/RankingRepository";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import RankingSQLite from "../infrastructures/sqlite/RankingSQLite";
import { RankingDto } from './dto/RankingDto';

@JsonController()
export class RankingController {
    private rankingRepository: IRankingRepository = RankingSQLite.create();

    /**
     * ランキング全取得
     * @param query 
     * @returns 
     */
    @Get('/rankings')
    @OnUndefined(404)
    public async getAll(@QueryParams() query: any) {
        return await this.rankingRepository.findAll();
    }

    /**
     * ランキングの保存・更新
     * @param body 
     * @returns 
     */
    @Post('/rankings')
    public async save(@Body() body: RankingDto, @Req() request: Request, @Res() response: Response) {
        const rankingEntity = RankingEntity.create(0, {
            gamemode: body.gamemode,
            username: UserName.create({ name: body.username }),
            mass: body.mass,
            createdAt: Time.create({value: new Date().toISOString() }),
            updatedAt: Time.create({value: new Date().toISOString() })
        });
        await this.rankingRepository.insert(rankingEntity);
        return {};
    }

    /**
     * ランキングの個別削除
     * @param id 
     * @returns 
     */
    @Delete('/rankings/:id')
    public async remove(@Param('id') id: number) {
        console.log(id);
        await this.rankingRepository.remove(id);
        return {};
    }
}