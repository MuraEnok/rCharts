library(XML)
url = "http://silouan.narod.ru/silnews/news25.htm#Text1"
txt <- htmlParse(url)

docs <- Corpus(DirSource("religion/"))

# create a loop to clean up 

for( j in seq(docs))
{ docs[[j]] <- gsub("content_h", " ", docs[[j]])
  docs[[j]] <- gsub("'", " ", docs[[j]])
  docs[[j]] <- gsub("rejoice", " ", docs[[j]])
  docs[[j]] <- gsub("kontakion", " ", docs[[j]])
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
loc = "religion/silioun.png"
# get the theme from colorBrewer
pal2 <- brewer.pal(8,"Dark2")
# this creates a permanant png to be viewed.
png(loc, width=800, height=600)
wordcloud(d$word, d$freq, min.freq=5, colors=pal2, scale=c(8,.2), rot.per=.15, random.order=F, max.words=Inf)
# wordcloud(d$word, d$freq, min.freq=20)
dev.off()