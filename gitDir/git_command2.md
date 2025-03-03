# Коммиты

## Создание коммитов
Git add

Для добавления изменений в коммит используется команда `git add` и имя

### Пример
![gitAdd](photos/gitAdd.png)

## Отправить коммит
```bash
git commit -m "your_message"
```
> git commit - обращение к GIT
>
>-m - добавить сообщение (комментарий)
>
>"your_message" - комментарий (в кавычках)
### Пример
![gitCommit](photos/gitCommit.png)

## Посмотреть список коммитов
* `git log` - стандартный вид
![gitLog](photos/gitLog.png)
* `git log --graph` - вид с графическим отображением веток
![gitLogGraph](photos/gitLog.png)


## Перейти к сохранению
 ```git checkout```
* ```git checkout <номер коммита, первые 4 символа>``` - перейти к определенному изменению ![gitCheckout](photos/gitChechout.png)
* ```git checkout master``` - перейти к изменению последнего коммита ![gitCheckoutMaster](photos/gtiCheckoutMaster.png)
## Посмотреть есть ли не сохранненные изменения репозитория (файлов)
* ```get status```
![gitStatus](photos/gitStatus.png)

## Работа с ветками
* ```git branch``` - посмотреть список веток ![gitBranch](photos/gitBranch.png)
* ```git branch <название ветки>``` - создать ветку (новая ветка унаследует коммиты родительской ветки) ![gitBranchCreate](photos/gitBranchCreate.png)
* ```git checkout <название ветки>``` - перейти на ветку ![gitCheckout2](photos/gitChechout.png)
* ```git branch -d <название ветки>``` - удалить ветку после merge ![gitBranchd](photos/gitBranchd.png)
* ```git brach -D <название ветки>``` - удалить ветку принудительно ![gitBranchD](photos/gitBranchD.png)
* ```git merge <название сливаемой ветки>``` - сливание веток

