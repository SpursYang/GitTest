# git基本语法
## 创建Git全局名称与邮箱
1.	设置用户名：  
`git config --global user.name '这里填写自己的用户名' `
2.	设置用户名邮箱  
`git config --global user.email '这里填写自己的用户名邮箱' `
>注意空格

## 初始化Git项目目录
1.  进入制定目录(linux)  
`cd /制定路径`
2.	如本地不存在，创建目录(linux)  
`mkdir '文件名称' `
3.	初始化  
`git init`

## 向仓库添加文件
1. 创建文件(linux)  
`touch a1.php`
2.	查看本地仓库情况  
`git status`
3.	添加文件到暂存区  
`git add <文件名>` 
4.	将暂存区文件添加到本地仓库  
`git commit -m '添加描述'` 

## 修改仓库文件并提交
1. 本地修改a1.php(linux)  
`vi a1.php`
2. 将修改文件添加到暂存区  
`git add <文件名>` 
3. 将暂存区文件添加到本地仓库  
`git commit -m '添加描述'` 

## 删除文件

1.	删除本地文件(linux)  
`rm -rf a1.php`  

2.	删除暂存区命令  
`git rm <文件名>`
  - 该命令删除的只是工作目录和暂存区域的文件，也就是取消跟踪，在下次提交时不纳入版本管理  
  
3. 删除已经提交本地仓库的文件  
```
git rm <文件名>
git reset --soft HEAD～
git status
```
 - 删除后需要回到上一版本 再做之后操作，版本中将不再出现

4. 删除暂存区和工作区文件  
`git rm -f <文件名>`  
 - 当工作区和暂存区不一致时可使用－f强制全部删除

5. 只删除暂存区域文件，保留工作区域  
`git rm --cached <文件名>`  

## 将远程仓库代码复制到本地
`git clone 仓库地址`  
 - 创建项目路径至项目上一层(项目根目录与仓库名一致，所以创建至上一层)  
 - 克隆远程仓库代码至本地  


## 提交代码至远程仓库
`git push`
> 如果报错1.上传时要输入账号密码（私有项目，没有权限） 

解决：
在 .git文件 里面找到config 打开
.git文件在你mkdir创建的文件夹里面
```
[remote "origin"]
	url = https://github.com/SpursYang/GitTest.git 
	fetch = +refs/heads/*:refs/remotes/origin/*  
```	
> 将`url="https://github.com/SpursYang/GitTest.git"` 修改为`url="https://spursyang:密码@github.com/SpursYang/GitTest.git" `  

## 查看历史记录  
`git log`  
 - git log 命令可以显示所有提交过的版本信息  
 
`git log --oneline`  
 - 如果感觉太繁琐，可以加上参数  --pretty=oneline，只会显示版本号和提交时的备注信息   

`git reflog`  
 - git reflog 可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）  

## 版本回退  
`git rest --mixed HEAD~`  
 - 其中的mixed是默认，可以不加  
 - 移动HEAD的指向，将其指向上一个快照  
 - 将HEAD移动后指向的快照回滚到暂存区域  

`git rest HAED~2  /  git rest ba2a9`
 - ~后可以加数字表示回退到前几次版本，或加版本commitID的前几位直接回退到制定版本

`git rest --soft HEAD~`
 - 移动HEAD的指向，将其指向上一个快照  
 - 相当于撤销上一次提交  

`git rest --hard HEAD~`  
 - 移动HEAD的指向，将其指向上一个快照  
 - 将HEAD移动后指向的快照回滚到暂存区域  
 - 将暂存区域文件还原到工作目录  
 
## 版本比较  
`git diff [commitID]`
 - 比较暂存区域与工作目录
 - 加入commitID后比较当前目录与本地仓库代码，比较最后一版可直接用HEAD  
`git diff --cached [commitID]`
 - 比较本地仓库最新版本与暂存区
 - 加入commitID后比较本地仓库与暂存区
 
 - 移动名称  
	- J 向下移动一行  
	- K 向上移动一行  
	- F 向下移动一页
	- B 向上移动一页
	- D 向下移动半页
	- U 向上移动半页
 - 跳转名称
	- g 跳转第一行  
	- G 最后一行  
	- 3g 跳转第三行  
 - 搜索命令  
	- '/' 从上向下搜索
	- '?' 从下向上搜索
	- 'n' 找到下一个  
	- 'N' 找到上一个  
 - 退出名称  
  'Q' 退出  
  
  ![diff命令解释](https://raw.githubusercontent.com/SpursYang/GitTest/master/static/diffExplanation.png)  
  
## 修改最后一次本地仓库提交说明  
`git commit －－amend [-m "重新输入备注"]`
 - 如果未输入－m选项将进入vi编辑  

## 恢复被删除的git仓库文件  
`git checkout -- <文件名>`  
 - 恢复删除的文件必须在仓库有过提交  
 
## 重命名文件  
`git mv <旧文件名> <新文件名>`  

#  创建分支  
`git branch <分支名>`

## 切换分支  
`git checkout <分支名>`  

## 合并分支  

1. 直接完成  
`git merge <分支名>`  
 - 将分支合并到当前所在分支内  

2. 合并有冲突  
```
git merge <分支名>
.........解决冲突文件............
git add <解决冲突文件名>
git commit -m "fix conflicts"
```  

3. 创建并切换到新分支
`git checkout －b <新分支名>`  

## 删除分支  
`git branch -d <分支名>`
 - 其中'-d'可全写为'--delete'  
 