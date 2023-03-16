# > YouTubeMusic https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Music/YouTube-Music.list
# ⚠️ 注意，需要放置在 YouTube.list 之前，且不适用于 Quantumult X 及浏览器环境
{% macro main(rule) %}
USER-AGENT,com.google.ios.youtubemusic*
USER-AGENT,YouTubeMusic*
DOMAIN,music.youtube.com,{{ rule }}
{% endmacro %}
