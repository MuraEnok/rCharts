# install.packages(c("wordcloud", "tm"), repos="http://cran.r-project.org")
library(wordcloud)
library(tm)

library(XML)
url <- "http://www.lyricsfreak.com/5/50+cent/back+down_20001352.html"
url <- "http://www.lyricsfreak.com/5/50+cent/follow+my+lead_20448443.html"
pagetree <- htmlTreeParse(url)
body = pagetree[[1]]
content = body$children[[2]]$children$div$children[[3]]

lapply(content , write, "music.txt", append =TRUE, ncolumns=1000)

write(writeLines(unlist(lapply(content, paste, collaspe=" "))), "sm.txt")


install.packages('ctv')
library(ctv)
# install.views("NaturalLanguageProcessing")
cname <- file.path( "corpus", "target")
library(tm)
docs <- Corpus(DirSource(cname))

library(SnowballC)
for( j in seq(docs))
{ docs[[j]] <- gsub("-", " ", docs[[j]])
  docs[[j]] <- gsub("'", " ", docs[[j]])
}
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
wordcloud(d$word, d$freq, min.freq=50)