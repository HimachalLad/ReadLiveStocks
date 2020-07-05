from pandas_datareader import data
import datetime
from bokeh.plotting import figure, show, output_file
from bokeh.embed import components
start = datetime.datetime(1960, 3, 1)
end = datetime.datetime(2020, 3, 10)
df = data.FredReader("INDCPIALLMINMEI", start = start, end = end).read()
df.rename(columns = {'INDCPIALLMINMEI':'CPI'}, inplace = True) 
p = figure(title = "Consumer Price Index", x_axis_type='datetime', width=1000, height=300)
p.line(x = df.index, y = df['CPI'])
output_file('CPI.html')
show(p)
