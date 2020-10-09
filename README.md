# display-hostname
To test load balancing

## Quick start

```sh
sudo apt -y update
sudo apt-get install -y git npm
sudo mkdir workspace
sudo cd workspace
sudo git clone https://github.com/iAbhishek91/display-hostname.git
sudo cd display-hostname
sudo yarn
sudo chmod +x start.sh
sudo cp display-hostname.service /etc/systemd/system/
sudo systemctl daemon-restart
sudo systemctl enable display-hostname
sudo systemctl start display-hostname
```
Clone this in any cloud env and validate the hostname.
