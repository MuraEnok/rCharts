require(devtools)
install_github( 'rCharts','ramnathv',ref='dev' )
library(rCharts)

hair_eye_male <- subset(as.data.frame(HairEyeColor), Sex == "Male")

head(hair_eye_male)

make_dataset <- function(x, y, data, group = NULL) {
  require(plyr)
  dat <- rename(data, setNames(c('name', 'value'), c(x, y)))
  dat <- dat[c('name', 'value', group)]
  if (!is.null(group)) {
    dlply(dat, group, toJSONArray, json = F)
  } else {
    list(main = toJSONArray(dat, json = F))
  }
}

dataset = make_dataset('Hair', 'Freq', hair_eye_male, group= 'Eye')
cat(RJSONIO::toJSON(dataset))

u1 <- rCharts$new()
u1$setLib("Libraries/widgets/uvcharts")
u1$set(
  type = 'Bar',
  categories = names(dataset),
  dataset = dataset,
  dom = 'chart1'
)
u1

data(economics, package = "ggplot2")
econ <- transform(economics, date = as.character(date))
m1 <- mPlot(x = "date", y = c("psavert", "uempmed"), type = "Line", data = econ)
m1$set(pointSize = 0, lineWidth = 1)
m1$print("chart2")
m1$save("econ.html", cdn=T)
