package clock

import "time"

type RealClock struct{}

func (r *RealClock) NowUnix() int64 {
	return time.Now().Unix()
}
