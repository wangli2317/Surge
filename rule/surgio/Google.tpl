#Google

{% macro main(rule) %}
# > Google Voice https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Google/GoogleVoice.list
DOMAIN,lens.l.google.com,{{ rule }}

# > Google Search https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Google/GoogleSearch.list
DOMAIN-KEYWORD,www.google.,{{ rule }}

# > Google Drive https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Google/GoogleDrive.list
PROCESS-NAME,Backup and Sync,{{ rule }}
USER-AGENT,%E4%BA%91%E7%AB%AF%E7%A1%AC%E7%9B%98*,{{ rule }}
USER-AGENT,Google.Drive*,{{ rule }}
USER-AGENT,*com.google.Drive*,{{ rule }}
DOMAIN-SUFFIX,docs.google.com,{{ rule }}
DOMAIN-SUFFIX,drive.google.com,{{ rule }}
DOMAIN-SUFFIX,googledrive.com,{{ rule }}
DOMAIN-SUFFIX,googleusercontent.com,{{ rule }}
DOMAIN,www.googleapis.com,{{ rule }}

# > Chromecast with Google TV https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/Google/Chromecast.list
DOMAIN-KEYWORD,pa.google,{{ rule }}

{% endmacro %}
