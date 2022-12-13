import { Body, Delete, Get, JsonController, Param, Post, QueryParams } from "routing-controllers";
import IExperienceRepository from "../domains/repositories/ExperienceRepository";
import { ExperienceDto } from './dto/ExperienceDto';

@JsonController()
export class ExperienceController {
    private experienceRepository: IExperienceRepository;

    /**
     * 経験値の設定
     * @param body 
     * @returns 
     */
    @Post('/experiences')
    insert(@Body() body: ExperienceDto) {
        console.log(body);
        // this.experienceRepository.insert();
        return `post`;
    }

    /**
     * 経験値の削除
     * @param id 
     * @returns 
     */
    @Delete('/experiences/:id')
    remove(@Param('id') id: number) {
        console.log(id);
        this.experienceRepository.remove(id);
        return {};
    }
}