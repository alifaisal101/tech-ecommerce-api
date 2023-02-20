export class DesktopDto {
    @ValidateNested()
    @Type(() => Gpu)
    @IsObject()
    powerSupply: 
}
