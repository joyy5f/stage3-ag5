var tipuesearch = {"pages": [{'title': 'Introduction', 'text': '組長: 40823111 許耀中 \n 組員: \n 40823115 黃歸吉 \n 40823120 范維倫 \n 40823124 廖璟程 \n 40823126 楊育翔 \n 40823128 曾鑵 斁 \n 40823139 王銘楫 \n 40823140 林子恩 \n 題目: \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Stage1,2', 'text': '', 'tags': '', 'url': 'Stage1,2.html'}, {'title': 'stage1', 'text': 'ag6 \n 題目:套圈遊樂器 \n ag9 \n 題目:自動折衣機 \n ag12 \n 題目: 平面四桿機構 \n ag15 \n 題目:水車 \n', 'tags': '', 'url': 'stage1.html'}, {'title': 'stage2', 'text': 'ag3 \n 專案主題: 自動砂帶機 \n 製作理念: 由於砂帶機還需要人工操作 砂帶滾動時有危險性 所以想增加夾具 讓砂帶機可以自動操作 \n 來避免手直接接觸 降低危險性 使工作環境更加安全 \n ag6 \n 題目 : 1.棒球打擊模擬 \n \n 一個平台(棒球場) 球打出去後可以接球(防守者) 漏接的球可以自動流回輸送台，再次被送回來 \n 使用類似螺紋的概念把球輸送到想要的平台 \n 希望可以把球的軌跡沿著螺旋線上升 \n 做成一個循迴機構 \n \n 主要物件: 2.隻機械手臂(王銘楫和廖璟承) 平台和送球機構(許耀中和范維倫) \n ag9 \n 題目:旋轉木馬 \n 製作理念:心血來潮 \n', 'tags': '', 'url': 'stage2.html'}, {'title': 'week', 'text': '', 'tags': '', 'url': 'week.html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'task1', 'text': '讀取 stage3_2a.txt, 建立 Stage3 的分組倉儲, 分組網頁, 以及各組員倉儲及網頁連結. \n \n with open("stage3_2a.txt") as gp:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = gp.readlines()\n    data = [d.replace(\'4823122\',\'40823122\') for d in data]\n    data = [v.replace(\'\\t\\t\\t\\t\',\'\') for v in data]\n#print(len(data))\nfor p in range(len(data)):\n    group = data[p].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a>  <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n    for  q in range(2,18,2):\n        try:\n              print(\'<p>\'+group[q]+\' | Website:\'+\'<a href="https://\'+group[q]+\'.github.io/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[q]+\'/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[q]+\'.github.io/stage3-ag\'+group[0][9]+\'">\'+group[q]+\'</a></p>\' )\n        except:\n            continue \n \n \n stage3_ag1 |  網站   倉儲 \n 40823131 | Website: 40823131  | Repository: 40823131  | Group Website: 40823131 \n a40823112 | Website: a40823112  | Repository: a40823112  | Group Website: a40823112 \n 40823123 | Website: 40823123  | Repository: 40823123  | Group Website: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145  | Group Website: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136  | Group Website: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109  | Group Website: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116  | Group Website: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108  | Group Website: 40823108 \n stage3_ag2 |  網站   倉儲 \n 40823151 | Website: 40823151  | Repository: 40823151  | Group Website: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121  | Group Website: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106  | Group Website: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102  | Group Website: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104  | Group Website: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106  | Group Website: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101  | Group Website: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132  | Group Website: 40823132 \n stage3_ag3 |  網站   倉儲 \n 40823119 | Website: 40823119  | Repository: 40823119  | Group Website: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150  | Group Website: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103  | Group Website: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107  | Group Website: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252  | Group Website: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154  | Group Website: 40823154 \n stage3_ag4 |  網站   倉儲 \n 40823142 | Website: 40823142  | Repository: 40823142  | Group Website: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144  | Group Website: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127  | Group Website: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148  | Group Website: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121  | Group Website: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135  | Group Website: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114  | Group Website: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146  | Group Website: 40823146 \n stage3_ag5 |  網站   倉儲 \n 40823111 | Website: 40823111  | Repository: 40823111  | Group Website: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115  | Group Website: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128  | Group Website: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120  | Group Website: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140  | Group Website: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124  | Group Website: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139  | Group Website: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126  | Group Website: 40823126 \n stage3_ag6 |  網站   倉儲 \n 40823152 | Website: 40823152  | Repository: 40823152  | Group Website: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110  | Group Website: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122  | Group Website: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125  | Group Website: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117  | Group Website: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129  | Group Website: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149  | Group Website: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153  | Group Website: 40823153 \n \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '請各組員分別將個人在 stage1 與 stage2 所完成的 coppeliasim 場景, 採 Python remote API 進行操控, 並將過程拍成影片後, 放在個人與分組網站上 \n 使用CoppliaSim 更新版: 4.2.0 版 \n \n 1. 第一組模擬 \n step1模擬   step2模擬 ', 'tags': '', 'url': 'task2.html'}, {'title': 'w11', 'text': '', 'tags': '', 'url': 'w11.html'}, {'title': 'task3', 'text': '每週各組按照組員順序, 於每堂課程時段, 輪流由 2-3 名學員啟動 OBS + Youtube 直播 \n 第一次 直播抽到組員 40823111 40823120 \n 1.介紹CoppliaSim 的使用方法 \n \n 2.介紹reveal的創見與撰寫網誌內容 \n \n', 'tags': '', 'url': 'task3.html'}, {'title': 'w12', 'text': '第二次 直播抽到組員 40823111 40823120 \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '\n', 'tags': '', 'url': 'w16.html'}]};