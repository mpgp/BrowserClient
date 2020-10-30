export class AccountDto {
  id: number;
  avatar: string;
  languages: string;
  lastOnline: Date;
  nickname: string;
  registerDate: Date;
  statusInfo: string;

  constructor(dto?: AccountDto) {
    if (dto) {
      this.id = dto.id;
      this.avatar = dto.avatar;
      this.languages = dto.languages;
      this.lastOnline = dto.lastOnline;
      this.nickname = dto.nickname;
      this.registerDate = dto.registerDate;
      this.statusInfo = dto.statusInfo;
    } else {
      this.id = 0;
      this.avatar = '';
      this.languages = '';
      this.lastOnline = new Date();
      this.nickname = '';
      this.registerDate = new Date();
      this.statusInfo = '';
    }
  }
}
