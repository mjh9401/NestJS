import { Body, Controller, Get, Post} from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardService : BoardsService){}

    @Get('/')
    getAllBoard():Board[]{
        return this.boardService.getAllBoards();
    }
    
    @Post()
    createBoard(
        @Body('title') title:String,
        @Body('description') description:String
    ):Board{
        return this.boardService.createBoard(title,description);
    }
}
