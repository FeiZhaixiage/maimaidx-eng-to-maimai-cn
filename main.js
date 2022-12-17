// ==UserScript==
// @name        maimaidx-eng2maimaidx-cn
// @namespace   maidxen2cn
// @description 把maimaiDXeng网站转换为maimaiCN版的降级插件（怪）
// @include     http*://maimaidx-eng.com*
// @version     1
// @match       https://maimaidx-eng.com/
// @run-at      document-idle
// ==/UserScript==
(function() {
    'use strict';
    var ImgTageName = document.getElementsByTagName("img");
    var ImgSrc = [];
    var i = 0;
    var ReplaceLink = [
        //主界面替换元素
        ["https://maimaidx-eng.com/maimai-mobile/img/logo.png", "https://maimai.wahlap.com/maimai-mobile/img/logo.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_home_on.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_home_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_playerdata_on.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_playerdata_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_record_on.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_record_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_ranking_on.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_ranking_on.png"],

        ["https://maimaidx-eng.com/maimai-mobile/img/menu_collection_on.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_collection_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_friend_on.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_friend_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_map_on.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_map_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_photo_on.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_photo_on.png"],

        ["https://maimaidx-eng.com/maimai-mobile/img/menu_home.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_home.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_playerdata.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_playerdata.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_record.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_record.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_ranking.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_ranking.png"],

        ["https://maimaidx-eng.com/maimai-mobile/img/menu_collection.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_collection.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_friend.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_friend.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_map.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_map.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_photo.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_photo.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/collection_setting.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/collection_setting.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/icon_leader.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/icon_leader.png"],

        //难度
        ["https://maimaidx-eng.com/maimai-mobile/img/diff_basic.png", "https://maimai.wahlap.com/maimai-mobile/img/diff_basic.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/diff_advanced.png", "https://maimai.wahlap.com/maimai-mobile/img/diff_advanced.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/diff_expert.png", "https://maimai.wahlap.com/maimai-mobile/img/diff_expert.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/diff_master.png", "https://maimai.wahlap.com/maimai-mobile/img/diff_master.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/diff_remaster.png", "https://maimai.wahlap.com/maimai-mobile/img/diff_remaster.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_basic.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_basic.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_advanced.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_advanced.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_expert.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_expert.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_master.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_master.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_remaster.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_remaster.png"],
        //新旧标识
        ["https://maimaidx-eng.com/maimai-mobile/img/music_dx.png", "https://maimai.wahlap.com/maimai-mobile/img/music_dx.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_standard.png", "https://maimai.wahlap.com/maimai-mobile/img/music_standard.png"],
        //bar 标题
        ["https://maimaidx-eng.com/maimai-mobile/img/title_music.png", "https://maimai.wahlap.com/maimai-mobile/img/title_music.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_musicranking.png", "https://maimai.wahlap.com/maimai-mobile/img/title_musicranking.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_ratingranking.png", "https://maimai.wahlap.com/maimai-mobile/img/title_ratingranking.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_totalscoreranking.png", "https://maimai.wahlap.com/maimai-mobile/img/title_totalscoreranking.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_totalachieveranking.png", "https://maimai.wahlap.com/maimai-mobile/img/title_totalachieveranking.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_tsranking.png", "https://maimai.wahlap.com/maimai-mobile/img/title_tsranking.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_totalawakeranking.png", "https://maimai.wahlap.com/maimai-mobile/img/title_totalawakeranking.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_playerdata.png", "https://maimai.wahlap.com/maimai-mobile/img/title_playerdata.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_photo_album.png", "https://maimai.wahlap.com/maimai-mobile/img/title_photo_album.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_playlog.png", "https://maimai.wahlap.com/maimai-mobile/img/title_playlog.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_setting.png", "https://maimai.wahlap.com/maimai-mobile/img/title_setting.png"],
        //评价
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/d.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/d.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/c.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/c.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/b.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/b.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/bb.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/bb.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/bbb.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/bbb.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/a.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/a.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/aa.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/aa.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/aaa.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/aaa.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/s.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/s.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/splus.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/splus.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/ss.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/ss.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/ssplus.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/ssplus.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/sss.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/sss.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/sssplus.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/sssplus.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_s.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_s.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_sp.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_sp.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_ss.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_ss.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_ssp.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_ssp.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_sss.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_sss.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_sssp.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_sssp.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_app.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_app.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_ap.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_ap.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_fcp.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_fcp.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_fc.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_fc.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_fsdp.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_fsdp.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_fsd.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_fsd.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_fsp.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_fsp.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/music_icon_fs.png", "https://maimai.wahlap.com/maimai-mobile/img/music_icon_fs.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/fc.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/fc.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/fcplus.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/fcplus.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/ap.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/ap.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/applus.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/applus.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/fc_dummy.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/fc_dummy.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/fs.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/fs.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/fsplus.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/fsplus.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/fsd.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/fsd.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/fsdplus.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/fsdplus.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/fs_dummy.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/fs_dummy.png"],
        //评价内文字
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/deluxscore.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/deluxscore.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/deluxscore.png", "https://maimai.wahlap.com/maimai-mobile/img/deluxscore.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/character.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/character.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/playlog/detail.png", "https://maimai.wahlap.com/maimai-mobile/img/playlog/detail.png"],
        //按钮
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_home_option.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_home_option.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_myrecord.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_myrecord.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_off.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_off.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_back.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_back.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_change.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_change.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_logout.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_logout.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_change_submit.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_change_submit.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_detail.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_detail.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_music_genre.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_music_genre.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_music_level.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_music_level.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_music_version.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_music_version.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_music_basic.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_music_basic.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_music_advanced.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_music_advanced.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_music_expert.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_music_expert.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_music_master.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_music_master.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_music_remaster.png", "https://maimai.wahlap.com/maimai-mobile/img/btn_music_remaster.png"],

        ["https://maimaidx-eng.com/maimai-mobile/img/btn_choice.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_choice.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_friend_code.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_friend_code.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_friend_favorite_off.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_friend_favorite_off.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_friend_invite.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_friend_invite.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_friend_invite_cancel.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_friend_invite_cancel.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_friend_vs.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_friend_vs.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_lock.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_lock.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_lockset.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_lockset.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_rearrange.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_rearrange.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_reset.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_reset.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_search.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_search.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_set.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_set.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_tourmember_formation.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_tourmember_formation.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_vs_start.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_vs_start.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_friend_favorite_on.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_friend_favorite_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_eventmap.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_eventmap.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_eventmap_on.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_eventmap_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_map.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_map.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_map_on.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_map_on.png"],



        ["https://maimaidx-eng.com/maimai-mobile/img/btn_Bronze.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_Bronze.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_Gold.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_Gold.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_Normal.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_Normal.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_Rainbow.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_Rainbow.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/btn_Silver.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/btn_Silver.png"],

        //选项条
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_home_home.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_home_home.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_record_playlog.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_record_playlog.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_record_music.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_record_music.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_ranking_music.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_ranking_music.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_ranking_rating.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_ranking_rating.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_ranking_tds.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_ranking_tds.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_ranking_tachieve.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_ranking_tachieve.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_ranking_tsp.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_ranking_tsp.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_ranking_tawaking.png", "https://maimai.wahlap.com/maimai-mobile/img/menu_sub_ranking_tawaking.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_error.png", "https://maimai.wahlap.com/maimai-mobile/img/title_error.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_error.png", "https://maimai.wahlap.com/maimai-mobile/img/title_error.png"],

        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_playerdata_playerdata.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_playerdata_playerdata.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_playerdata_stamp.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_playerdata_stamp.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_playerdata_ticket.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_playerdata_ticket.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_map_eventmap.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_map_eventmap.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_map_eventmaplog.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_map_eventmaplog.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_map_map.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_map_map.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_map_season.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_map_season.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_photo_album.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_photo_album.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_collection_character.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_collection_character.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_collection_frame.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_collection_frame.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_collection_icon.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_collection_icon.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_collection_nameplate.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_collection_nameplate.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_collection_partner.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_collection_partner.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_collection_trophy.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_collection_trophy.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_friend_match.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_friend_match.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_friend_search.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_friend_search.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_friend_accept.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_friend_accept.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_friend_invite.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_friend_invite.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/menu_sub_friend_list.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/menu_sub_friend_list.png"],

        ["https://maimaidx-eng.com/maimai-mobile/img/title_character.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_character.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_courserecord.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_courserecord.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_eventmap.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_eventmap.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_eventmaplog.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_eventmaplog.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_frame.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_frame.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_friend.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_friend.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_friend_accept.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_friend_accept.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_friend_invite.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_friend_invite.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_friend_matching.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_friend_matching.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_friend_search.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_friend_search.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_icon.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_icon.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_map.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_map.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_nameplate.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_nameplate.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_partner.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_partner.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_season.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_season.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_season_pointreward.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_season_pointreward.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_season_rankingreward.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_season_rankingreward.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_trophy.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_trophy.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_friend_code.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_friend_code.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_friend_vs.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_friend_vs.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_tourmember_list.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_tourmember_list.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/title_tourmember_replacement.png", "https://raw.githubusercontent.com/FeiZhaixiage/maimaidx-eng-to-maimai-cn/main/maimai-mobile/img/title_tourmember_replacement.png"],

        //Tab
        ["https://maimaidx-eng.com/maimai-mobile/img/tab_category_on.png", "https://maimai.wahlap.com/maimai-mobile/img/tab_category_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/tab_category.png", "https://maimai.wahlap.com/maimai-mobile/img/tab_category.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/tab_mybest_on.png", "https://maimai.wahlap.com/maimai-mobile/img/tab_mybest_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/tab_mybest.png", "https://maimai.wahlap.com/maimai-mobile/img/tab_mybest.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/tab_latest_on.png", "https://maimai.wahlap.com/maimai-mobile/img/tab_latest_on.png"],
        ["https://maimaidx-eng.com/maimai-mobile/img/tab_latest.png", "https://maimai.wahlap.com/maimai-mobile/img/tab_latest.png"]

    ];
    while (i < ImgTageName.length) {
        ImgSrc[i] = ImgTageName[i].src.replace(/\?.*/g, "");
        i = i + 1;
    }
    i = 0;
    while (i < ReplaceLink.length) {
        var PlaceIndex = ImgSrc.indexOf(ReplaceLink[i][0]);
        if (PlaceIndex != -1) {
            ImgTageName[PlaceIndex].src = ReplaceLink[i][1];
            ImgSrc[PlaceIndex] = "";
        } else {
            i = i + 1;
        }
    }
})();