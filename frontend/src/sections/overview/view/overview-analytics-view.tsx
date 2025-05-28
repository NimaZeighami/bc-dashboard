import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        سلام، رسیدن بخیر👋 (شعار !)
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="درآمد"
            percent={2.6}
            total={714000}
            icon={<img alt="درآمد" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهتشت'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
            color="error"
          />
        </Grid>

 

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="بازدید"
            percent={-0.1}
            total={1352831}
            color="secondary"
            icon={<img alt="بازدید" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهتشت'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="هزینه "
            percent={2.8}
            total={1723315}
            color="warning"
            icon={<img alt="هزینه " src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهتشت'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="فاکتور"
            percent={3.6}
            total={234}
            color="primary"
            icon={<img alt="فاکتور" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهتشت'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsCurrentVisits
            title="پرفروش ترین ها"
            chart={{
              series: [
                { label: 'مجلسی', value: 3500 },
                { label: 'کت', value: 2500 },
                { label: 'شلوار', value: 1500 },
                { label: 'دامن', value: 500 },
              ],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsWebsiteVisits
            title="نمودار فروش"
            subheader="34% بیشتر از پارسال"
            chart={{
              categories: ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهتشت'],
              series: [
                { name: 'فروش امسال', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'فروش پارسال', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsConversionRates
            title="نمودار بازدید"
            subheader="54% بیشتر از پارسال"
            chart={{
              categories: ['بهمن', 'اسفند', 'فروردین', 'اردیبهتشت'],
              series: [
                { name: '2024', data: [44, 55, 41, 64, 22] },
                { name: '2025', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsCurrentSubject
            title="وضعیت کنونی"
            chart={{
              categories: ['اینستاگرام', 'تلگرام', 'سایت', 'حضوری', 'تلفنی', 'تبلیغ'],
              series: [
                { name: 'هزینه', data: [80, 50, 30, 40, 100, 20] },
                { name: 'درآمد', data: [20, 30, 40, 80, 20, 80] },
                { name: 'پس انداز', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsTrafficBySite title="جذب مشتری" list={_traffic} />
        </Grid>

      </Grid>
    </DashboardContent>
  );
}
