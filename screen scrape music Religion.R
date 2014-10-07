# install.packages(c("wordcloud", "tm"), repos="http://cran.r-project.org")
library(wordcloud)
library(tm)
# install.packages('ctv')
library(ctv)
library(SnowballC)
library(XML)
library(RColorBrewer)
# h/hillsong+united/
# install.views("NaturalLanguageProcessing")
# put the name of artist in url_m with the folder location
url_m = "g/garth+brooks"
url_base = "http://www.lyricsfreak.com/"
url_end = "/last_30_lyrics.xml"

# this site is publishing a nice xml feed with links to the last 30 songs by this artist. Instead of doing screen scrape 
# main page for simplicity just use this xml feed
url = paste(url_base, url_m, url_end, sep="")

# this creates list of the 30 links to the lyrics as an html page a removes all else
links = htmlParse(url)
src = xpathApply(links, "//a[@href]", xmlGetAttr, "href")

# this loops through the 30 links and downloads the html file and keeps just to song content
# it works, but takes awhile to parse the xml functions real work is in content section
for (i in 1:length(src)) {
  url = paste(src[i])
  pagetree <- htmlTreeParse(url)
  body = pagetree[[1]]
  content = body$children[[2]]$children$div$children[[3]]
  # get the name of song to save as text file
  nm = gsub("[0-9 /.html/_\\+]", "", unlist(strsplit(url, "/"))[6])
  # get the artis name to make folder to store text files
  artist = paste(gsub("[0-9 /.html/_+]", "", unlist(strsplit(url, "/"))[5]))
  # this creates dir with the name and throws off 29 warnings that the folder exits already
  # i am being lazy and should add a if statement here
  dir.create(file.path("songs", artist)) 
  # write out the file as text
  name = paste("songs/", artist, "/", nm, ".txt", sep="")
  write(unlist(content), name)
  
}

# get the folder where all files are
cname <- file.path("songs", artist)
# this creates a corpus of all files as one list.  Not sure how this works it just does
docs <- Corpus(DirSource(cname))

# create a loop to clean up 

for( j in seq(docs))
{ docs[[j]] <- gsub("content_h", " ", docs[[j]])
  docs[[j]] <- gsub("'", " ", docs[[j]])
  docs[[j]] <- gsub("br", " ", docs[[j]])
  docs[[j]] <- gsub("text", " ", docs[[j]])
  docs[[j]] <- gsub("div", " ", docs[[j]])
# i have not figured out way to change misspelling of aint don't which get used a lot in rap songs  
}
# format the text to remove the funky elements
docs <- tm_map(docs, tolower)
docs <- tm_map(docs, removeWords, stopwords("english"))
docs <- tm_map(docs, removeNumbers)
docs <- tm_map(docs, removePunctuation)
docs <- tm_map(docs, stripWhitespace)

dtm <- DocumentTermMatrix(docs)

m <- as.matrix(dtm)
v <- sort(colSums(m), decreasing=TRUE)
head(v, 14)
words <- names(v)
d <- data.frame(word=words, freq=v)
loc =paste(cname, "/", artist, ".png", sep="")
# get the theme from colorBrewer
pal2 <- brewer.pal(8,"Dark2")
# this creates a permanant png to be viewed.
png(loc, width=800, height=600)
wordcloud(d$word, d$freq, min.freq=3, colors=pal2, scale=c(8,.2), rot.per=.15, random.order=F, max.words=Inf)
# wordcloud(d$word, d$freq, min.freq=20)
dev.off()