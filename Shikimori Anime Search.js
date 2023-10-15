// ==UserScript==
// @name         Shikimori Anime Search
// @version      1.61
// @description  Добавляет кнопки поиска на шикимори, для удобного поиска аниме на других сайтах.
// @author       Foksi
// @match        *://shikimori.me/*
// @match        *://shikimori.one/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.me
// @homepageURL  https://github.com/i1fox/Shikimori_Anime_Search
// @updateURL    https://raw.githubusercontent.com/i1fox/Shikimori_Anime_Search/main/Shikimori%20Anime%20Search.js
// @downloadURL  https://raw.githubusercontent.com/i1fox/Shikimori_Anime_Search/main/Shikimori%20Anime%20Search.js

// ==/UserScript==

function start(){
	if (window.location.href.indexOf("//shikimori.me/animes/") !== -1);
    if (window.location.href.indexOf("//shikimori.one/animes/") !== -1); {
		setTimeout(function () {
			if (!$(".watch-online-placeholer").length) {
				$(".c-info-right").append("<div class='watch-online-placeholer'></div>");
			}

			if ($(".watch-online-placeholer .block:last-child")) {
				$(".watch-online-placeholer .block:last-child").remove();
			}

			if (!$(".watch_link").length) {
				if (!$(".AnimeSearch").length) {
					let name = $('.head > h1').text().split("/")[1];
					$(".watch-online-placeholer").append(
					"<div class='block HDRezka'><a target=_blank href='https://rezka.ag/search/?do=search&subaction=search&q=" + name + "' class='b-link_button dark watch_link '>Найти на HDRezka</a></div>"
                    )
					$(".watch-online-placeholer").append(
					"<div class='block AnimeGo'><a target=_blank href='https://animego.org/search/all?q=" + name + "' class='b-link_button dark watch_link '>Найти на AnimeGo</a></div>"
                    )
                    $(".watch-online-placeholer").append(
					"<div class='block AnimeVost'><a target=_blank href='https://animevost.tv/?do=search&subaction=search&story=" + name + "' class='b-link_button dark watch_link '>Найти на AnimeVost</a></div>"
					)
                    $(".watch-online-placeholer").append(
					"<div class='block AnimeStars'><a target=_blank href='https://animestars.org/index.php?do=search&subaction=search&search_start=1&full_search=0&result_from=1&story=" + name + "' class='b-link_button dark watch_link '>Найти на AnimeStars</a></div>"
					)
					$(".watch-online-placeholer").append(
					"<div class='block AniStar'><a target=_blank href='https://anistar.org/index.php?do=search&subaction=search&search_start=1&full_search=0&result_from=1&story=" + name + "' class='b-link_button dark watch_link '>Найти на AniStar</a></div>"
                    )
                    $(".watch-online-placeholer").append(
					"<div class='block AnimeJoy'><a target=_blank href='https://animejoy.ru/index.php?do=search&subaction=search&search_start=1&full_search=0&result_from=1&story=" + name + "' class='b-link_button dark watch_link '>Найти на AnimeJoy (Субтитры)</a></div>"
                    );

				}
			}
		}, 200);
	}
}

$(document).ready(start);
$(document).on('page:load', start);
$(document).on('turbolinks:load', start);
