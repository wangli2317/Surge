# > Spotify https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Music/Spotify.list
{% macro main(rule) %}
USER-AGENT,Spotify*
DOMAIN-SUFFIX,pscdn.co
DOMAIN-SUFFIX,scdn.co
DOMAIN-SUFFIX,spotify.com
DOMAIN-SUFFIX,spoti.fi
DOMAIN-KEYWORD,spotify.com
DOMAIN-KEYWORD,-spotify-com
{% endmacro %}
