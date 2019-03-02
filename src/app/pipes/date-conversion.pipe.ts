import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConversion'
})
export class DateConversionPipe implements PipeTransform {

  /**
   * transform преобразует дату создания в подходящий формат.
   * @param creatingTime - время создания.
   * Находим разнуцу во времени и в зависимости от ее вличины выбираем формат отображения времени.
   * 1. timeDif < 60 (меньще минуты):
   * @returns - 'только что';
   * 2. (timeDif >= 60) && (timeDif < 86400) (меньше суток):
   *        - Считает количество часов и минут;
   *        - Определяет последние цифры в количестве частов и минут;
   *        - В зависимости от этого выбирает окончания;
   * Если timeDif < 3600 (меньше часа):
   * @returns - время в минутах
   * Если timeDif >= 3600 (час и больше):
   * @returns - вермя в часах и минутах
   * 3. timeDif >= 86400 (сутки и больше):
   * По объекту времени создания отпределяет нужные параметры времени, из них сотавляет строку.
   * @returns - время и число создания.
   */
  transform(creatingTime: Date): string {
    // Актуальное время
    const currentDate: Date = new Date();

    // Разница между временем создания и актуальным временем + для проверки
    const timeDif: number = currentDate.valueOf() - creatingTime.valueOf() + 7800;

    switch (true) {
      case (timeDif < 60) : {
        return 'только что';
      }

      case ((timeDif >= 60) && (timeDif < 86400)) : {
        // Количество часов и минут в разнице времени
        const hours: number = Math.floor(timeDif / 3600);
        const minutes: number = Math.floor((timeDif - hours * 3600) / 60);

        // Последний символ в часе и в минуте
        const lastHour: number = Number(('' + hours).slice(-1));
        const lastMinute: number = Number(('' + minutes).slice(-1));

        // Выбор окончания в строке со временем
        const hoursStrEnd: string = ( lastHour === 1 ) ? ' ' :  ( lastHour >= 2 && lastHour <= 4 ) ? 'а ' : 'ов ';
        const minutesStrEnd: string = ( lastMinute === 1 ) ? 'a ' : ( lastMinute >= 2 && lastMinute <= 4 ) ? 'ы ' : ' ';

        if (timeDif < 3600) {
          return minutes + ' минут' + minutesStrEnd + ' назад';
        } else {
          return hours + ' час' + hoursStrEnd + ( (minutes) ? ' ' + minutes + ' минут' + minutesStrEnd : '' )  + ' назад';
        }
      }

      case (timeDif >= 86400) : {
        const year = creatingTime.getFullYear();
        const month = creatingTime.getMonth() + 1;
        const day = creatingTime.getDate();
        const hour = creatingTime.getHours();
        const minute = creatingTime.getMinutes();

        return ((day <= 9) ? '0' : '') + day + '.' + ((month <= 9) ? '0' : '') + month + '.' +
               year + ' в ' + ((hour <= 9) ? '0' : '') + hour + ':' + ((minute <= 9) ? '0' : '') + minute;
      }
    }
  }

}
