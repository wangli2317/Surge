# > Spotify https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/StreamingMedia/Music/Spotify.list
{% macro main(rule) %}
USER-AGENT,Spotify*
DOMAIN-SUFFIX,pscdn.co,{{ rule }}
DOMAIN-SUFFIX,scdn.co,{{ rule }}
DOMAIN-SUFFIX,spotify.com,{{ rule }}
DOMAIN-SUFFIX,spoti.fi,{{ rule }}
DOMAIN-KEYWORD,spotify.com,{{ rule }}
DOMAIN-KEYWORD,-spotify-com,{{ rule }}
{% endmacro %}
