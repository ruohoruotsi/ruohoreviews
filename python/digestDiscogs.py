
###################################
# Extract usable data from 
# http://www.discogs.com/data
###################################

import xmltodict
import gzip
import io
import random
import json

######################################################################
# artists
###################################
def handle_artist(_, artist):
    str = artist['name'] + " \n"
    print(str)
    global artistsFile
    artistsFile.write(str)
    return True

#artistsFile = io.open('artists.txt', 'w', encoding='utf8')
#xmltodict.parse(gzip.GzipFile('discogs_20160101_artists.xml.gz'), item_depth=2, item_callback=handle_artist)


######################################################################
# labels
###################################

def handle_label(_, label):
    str = label['name']
    #print(str)
    global count, labelsCache
    if(count < 300 and str.find("Records") != -1 and str.find("(") == -1 and random.choice([True, False])):
        labelsCache.append(str)
        count = count + 1
    return True

#
# grab data from http://data.discogs.com
#
count = 0
labelsCache = []
labelsFile = io.open('labels.txt', 'w', encoding='utf8')
xmltodict.parse(gzip.GzipFile('discogs_20160101_labels.xml.gz'), item_depth=2, item_callback=handle_label)
with open('labelsCache.js', 'w') as outfile:
    outfile.write("var labelsCache = ")
    json.dump(labelsCache, outfile)
    outfile.write(";")
    outfile.close()

######################################################################
# release
###################################
def handle_release(_, release):
    str = release['title'] + " \n"
    print(str)
    return True
#     global count
#     if(count < 300 and str.find("Records") != -1 and str.find("(") == -1 and random.choice([True, False])):
#     	global labelsFile
#     	labelsFile.write(str)
#     	count = count + 1
#     return True
# count = 0
# releasesFile = io.open('release.txt', 'w', encoding='utf8')
# xmltodict.parse(gzip.GzipFile('discogs_20160101_releases.xml.gz'), item_depth=2, item_callback=handle_release)
#
