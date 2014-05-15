usp = reshape2::melt(USPersonalExpenditure)
p4 <- Rickshaw$new()
p4$layer(value ~ Var2, group = 'Var1', data = usp, type = 'area')
p4$publish(file.html)

hair_eye_male = subset(as.data.frame(HairEyeColor), Sex == "Male")
n1 <- nPlot(Freq ~ Hair, group = 'Eye', 
            data = hair_eye_male, type = 'multiBarChart'
)
n1$set(width = 600)

go <- n1$show('inline', include_assets = TRUE, cdn = TRUE)

write(n1$show, "hoto.html")

data(economics, package = "ggplot2")
econ <- transform(economics, date = as.character(date))
m1 <- mPlot(x = "date", y = c("psavert", "uempmed"), type = "Line", data = econ)
m1$set(pointSize = 0, lineWidth = 1)
m1$print("chart2")

n1$save("chart5.html", standalone=T)