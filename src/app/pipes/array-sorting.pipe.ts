import { Pipe, PipeTransform } from '@angular/core';
import { User } from './../interfaces/user';

@Pipe({
  name: 'arraySorting'
})
export class ArraySortingPipe implements PipeTransform {

  /**
   * Сортировка массива.
   * @param arr - массив объектов типа 'Users';
   * @param param - поле массива, по которому будет проходить сортировка;
   * @returns - отсортированны массив пользователей.
   */
  sortArr(arr: User[], param: string): User[] {
    return arr.sort((prev, next) => {
      return (prev[param] > next[param]) ? 1 : (prev[param] < next[param]) ? -1 : 0;
    });
  }

  /**
   * Возвращает массив в зависимости от переданны параметров.
   * @param users - массив объектов типа 'Users';
   * @param sortingParam - поле массива, по которому будет проходить сортировка;
   * @param sortingTo - направление сортировки (по возрастанию / по убыванию).
   * Если sortingParam передано, а sortingTo не передано или передано некорректно:
   * @returns - возвращает отсортированный массив по возрастанию;
   * Если sortingParam и sortingTo переданы:
   * @returns - возвращает отсортированный массив в зависимости от направления сортировки.
   * Если sortingParam и sortingTo не переданы или переданы некорректно:
   * @returns - возвращает исходный массив.
   */
  transform(users: User[], sortingParam?: string, sortingTo?: string): User[] {
    switch (true) {
      case ((users[0][sortingParam]) && (sortingTo !== 'up' && sortingTo !== 'down')) : {
        return this.sortArr(users, sortingParam);
      }

      case ((users[0][sortingParam]) && (sortingTo === 'up' || sortingTo === 'down')) : {
        return (sortingTo === 'up') ? this.sortArr(users, sortingParam) : this.sortArr(users, sortingParam).reverse();
      }

      default : return users;
    }
  }

}
