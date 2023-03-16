# TV https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Apple/TV.list
{% macro main(rule) %}
PROCESS-NAME,TV,{{ rule }}
USER-AGENT,AppleTV*,{{ rule }}
USER-AGENT,com.apple.tv*,{{ rule }}
DOMAIN-SUFFIX,tv.apple.com,{{ rule }}
DOMAIN,hls.itunes.apple.com,{{ rule }} // Trailers
DOMAIN,hls-amt.itunes.apple.com,{{ rule }} // Trailers
DOMAIN,play-edge.itunes.apple.com,{{ rule }} // Unblock Region
DOMAIN,tv.applemusic.com,{{ rule }}
DOMAIN,uts-api.itunes.apple.com,{{ rule }}
{% endmacro %}
