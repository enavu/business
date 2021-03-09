import pandas as pd
import datetime
import matplotlib.pyplot as plt
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from statsmodels.tsa.stattools import adfuller
#read csv file
df = pd.read_csv("~/Downloads/sales_trans.tsv", sep='\t')

### pd  1.2.3 
##clean up 
print(df.columns.tolist())
##['Time', 'Staff', 'Item', 'Client', 'Discount', 'Net', 'Tax', 'Gross', 'Payment Type']
##label staff unique id and staff unique id
df = df.assign(staff_id=(df['Staff']).astype('category').cat.codes)
df = df.assign(client_id=(df['Client']).astype('category').cat.codes)
#### delete sensitive data by day look 
del df['Staff']
del df['Client']

##more cleanup of data, some rows had page numbers and column names as that repeated in each page report.
df = df[df.Time.str.len() > 14]
df = df.assign(DateTime=(pd.to_datetime(df['Time'])))
##crate date only
df = df.assign(Month=(df['DateTime'].astype(str).str[:7]))
df = df.assign(Date=(df['DateTime'].astype(str).str[:10]))
###Create data frame to group by date and gross so - we can do a linear regression on it.
##need to convert columns to numeric/float
df['Net'] = df['Net'].astype(float)
df['Gross'] = df['Gross'].astype(float)

#### Daily ####
dfDay = df.groupby(['Date'])['Gross'].agg('sum').reset_index(name ='Total_sales')
dfDay['date_ordinal'] = pd.to_datetime(dfDay['Date']).apply(lambda date: date.toordinal())
X = dfDay.iloc[:, 2].values.reshape(-1, 1)  # values converts it into a numpy array
Y = dfDay.iloc[:, 1].values.reshape(-1, 1)  # -1 means that calculate the dimension of rows, but have 1 column
linear_regressor = LinearRegression()  # create object for the class
linear_regressor.fit(X, Y)  # perform linear regression
y_pred = linear_regressor.predict(X)  # make predictions
dfDay.loc[(dfDay.Dates==row.Dates), 'slopeCell'] = regressor.coef_
dfDay.to_csv('daily_linear_regression.csv')
#check data
plt.scatter(X, Y)
plt.plot(X, y_pred, color='red')
plt.show()
#Timeserries rolling mean
###convert day
con2 = dfDay['Date']
dfDay['Date'] = pd.to_datetime(dfDay['Date'])
dfDay.set_index('Date', inplace = True)
tsday = dfDay['Total_sales']
plt.plot(tsday)
plt.show()


####Monthly 
dfMonth= df.groupby(['Month'])['Gross'].agg('sum').reset_index(name ='Total_sales')
dfMonth['date_ordinal'] = pd.to_datetime(dfMonth['Month']).apply(lambda date: date.toordinal())

x = dfMonth.iloc[:, 2].values.reshape(-1, 1)  # values converts it into a numpy array
y = dfMonth.iloc[:, 1].values.reshape(-1, 1)  # -1 means that calculate the dimension of rows, but have 1 column
linear_regressor = LinearRegression()  # create object for the class
linear_regressor.fit(x, y)  # perform linear regression
y_predm = linear_regressor.predict(x)
dfMonth['y_pred'] = linear_regressor.predict(x)  # make predictions
dfMonth.to_json('monthly_linear_regression.json')
plt.scatter(x, y)
plt.plot(x, y_predm, color='red')
plt.show()
###time series
dfMonth['Month'] = pd.to_datetime(dfMonth['Month'])
dfMonth.set_index('Month', inplace = True)
#check datatype of index
dfMonth.index
#convert to time series
ts = dfMonth['Total_sales']
#check data 
plt.plot(ts)
plt.show()

#Determing rolling statistics
rolmean = pd.Series(timeseries).rolling(window=12).mean()
rolstd = pd.Series(timeseries).rolling(window=12).std()


### I wanted to find the mean of this ...but as you can see - it is not what I expect - I want to fix the data by applying a prediction to the data
######d3 data
dfCategory = df.groupby(['Item'])['Gross'].agg('sum').reset_index(name ='Total_sales')

dfCategory = dfCategory.sort_values('Total_sales', ascending = False).groupby('Item').head(2)
dfCategory = dfCategory.head(20)
dfCategory.to_csv('Category.csv')

