# > Apple Music https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Apple/Music.list
{% macro main(rule) %}
PROCESS-NAME,Music,{{ rule }}
USER-AGENT,Music*,{{ rule }}
DOMAIN-SUFFIX,applemusic.com,{{ rule }}
DOMAIN-SUFFIX,music.apple.com,{{ rule }}
DOMAIN,aod.itunes.apple.com,{{ rule }}
DOMAIN,aod-ssl.itunes.apple.com,{{ rule }}
DOMAIN,audio.itunes.apple.com,{{ rule }}
DOMAIN,audio-ssl.itunes.apple.com,{{ rule }}
DOMAIN,mvod.itunes.apple.com,{{ rule }}
DOMAIN,streamingaudio.itunes.apple.com,{{ rule }}
// iCloud Music Library
DOMAIN-SUFFIX,blobstore.apple.com,{{ rule }} 
{% endmacro %}
