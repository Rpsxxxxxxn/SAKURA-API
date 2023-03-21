import { Response } from "express";
import { Body, JsonController, Post, Res } from "routing-controllers";
import { RankingEntity } from "../domains/entities/RankingEntity";
import { ServerListEntity } from "../domains/entities/ServerListEntity";
import IDiscordNoticeServerListRepository from "../domains/repositories/discords/NoticeServerListRepository";
import IDiscordNoticeTopMassRankingRepository from "../domains/repositories/discords/NoticeTopMassRepository";
import { Time } from "../domains/valueobjects/Time";
import { UserName } from "../domains/valueobjects/UserName";
import NoticeServerListRepository from "../infrastructures/discords/NoticeServerListRepository";
import NoticeTopMassRepository from "../infrastructures/discords/NoticeTopMassRepository";
import { ServerListDto } from './dto/ServerListDto';
import { TopMassRankingDto } from './dto/TopMassRankingDto';

@JsonController('/discordNotice')
export class DiscordNoticeController {
    private serverRepository: IDiscordNoticeServerListRepository = NoticeServerListRepository.create(process.env.SAKURA_API_DISCORD_TOKEN ?? '', process.env.SAKURA_API_DISCORD_SERVERLIST_CHANNELID ?? '');
    private topMassRepository: IDiscordNoticeTopMassRankingRepository = NoticeTopMassRepository.create(process.env.SAKURA_API_DISCORD_TOKEN ?? '', process.env.SAKURA_API_DISCORD_TOPMASS_CHANNELID ?? '');

    /**
     * ランキング登録
     * @param {TopMassRankingDto} body 
     * @param {Response} response 
     * @returns 
     */
    @Post('/registTopMassRanking')
    public async registTopMassRanking(@Body() body: TopMassRankingDto,  @Res() response: Response) {
        const topMassRanking: RankingEntity = RankingEntity.create(0, {
            gamemode: body.gamemode,
            username: UserName.create({ name: body.username }),
            mass: body.mass,
            createdAt: Time.create({ value: new Date().toISOString() }),
            updatedAt: Time.create({ value: new Date().toISOString() })
        });
        await this.topMassRepository.registTopMassRanking(topMassRanking);
        return response.status(200).send('ランキング登録が完了しました。');
    }

    /**
     * サーバーリスト登録
     * @param {ServerListDto} body 
     * @param {Response} response 
     * @returns 
     */
    @Post('/registServerlist')
    public async registServerlist(@Body() body: ServerListDto, @Res() response: Response) {
        const serverlistEntity = ServerListEntity.create(0, {
            name: body.name,
            detail: body.detail,
            gamemode: body.gamemode,
            address: body.address,
            port: body.port,
            healthCheck: false
        });
        await this.serverRepository.registServerlist(serverlistEntity);
        return response.status(200).send('サーバーリスト登録が完了しました。');
    }
}