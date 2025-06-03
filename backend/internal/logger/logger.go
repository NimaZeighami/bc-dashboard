package logger

import (
	"os"
	"github.com/sirupsen/logrus"
)

var Log *logrus.Logger

func InitLogger() *logrus.Logger {
	Log = logrus.New()
	Log.SetOutput(os.Stdout)
	Log.SetLevel(logrus.DebugLevel) // for development, change to Info in prod
	Log.SetFormatter(&logrus.TextFormatter{
		FullTimestamp: true,
	})

	return Log
}
