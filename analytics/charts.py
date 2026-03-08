import pandas as pd
import plotly.express as px

def job_demand_chart(data):

    fig = px.bar(
        data,
        x="job_title",
        y="demand_score",
        title="Top Job Market Demand"
    )

    return fig