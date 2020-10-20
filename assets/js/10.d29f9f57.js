(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{490:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("第一个脚本保存为vsftpd.sh，赋予x权限，或者sh vsftpd.sh user passwd执行，会根据系统(仅支持CentOS5,6,7,建议为6)配置虚拟用户登录ftp环境； 第二个脚本为创建虚拟用户函数，请往下看。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#!/bin/bash\n#Create virtual ftp users, first user is test\nerror() {\n  echo "Error,args is 2:user password" \n  exit 1\n}\nSYS_VERSION=$(awk -F "release" \'{print $2}\' /etc/redhat-release | awk \'{print $1}\' | awk -F . \'{print $1}\')\n[ "$#" = "2" ] || error\nvfu=/etc/vsftpd/vfu.list\nvfudb=/etc/vsftpd/vfu.db\nvfudir=/etc/vsftpd/vfu_dir\nuser=$1\npasswd=$2\n\nyum -y install vsftpd ftp\n[ "$SYS_VERSION" == "5" ] && yum -y install db4-utils\n[ "$SYS_VERSION" == "6" ] && yum -y install db4-utils\n[ "$SYS_VERSION" == "7" ] && yum -y install libdb-utils\ncat >> $vfu <<EOF\n$user\n$passwd\nEOF\ndb_load -T -t hash -f $vfu $vfudb\nchmod 600 $vfu $vfudb\n\ncat > /etc/pam.d/vsftpd.vu <<EOF\n#%PAM-1.0\nauth   required     pam_userdb.so  db=/etc/vsftpd/vfu\naccount required    pam_userdb.so  db=/etc/vsftpd/vfu\nEOF\n\nmv /etc/vsftpd/vsftpd.conf /etc/vsftpd/vsftpd.conf.bak\ncat > /etc/vsftpd/vsftpd.conf<<EOF\nftpd_banner=Ftp CodeSourceRoot\nanonymous_enable=NO\nlocal_enable=YES\nwrite_enable=YES\nlocal_umask=022\nxferlog_enable=YES\nxferlog_std_format=YES\nxferlog_file=/var/log/vsftpd.log\nuserlist_enable=YES\nuserlist_deny=YES\nlisten=YES\nlisten_ipv6=NO\nmax_per_ip=5\ntcp_wrappers=YES\npam_service_name=vsftpd.vu\nvirtual_use_local_privs=YES\nguest_enable=YES\nguest_username=ftp\nuser_config_dir=$vfudir\nchroot_list_enable=YES\nchroot_list_file=/etc/vsftpd/chroot_list\nchroot_local_user=YES\nlocal_root=/var/ftp/\nEOF\n#chroot_list:open user\n#chown -R ftp.ftp /var/ftp\n#chmod -R a+t /vat/ftp/\ntouch /etc/vsftpd/chroot_list\nmkdir -p $vfudir ; cd $vfudir\ncat > $user <<EOF\nwrite_enable=YES\nanon_world_readable_only=NO\nanon_upload_enable=YES\nanon_mkdir_write_enable=YES\nanon_other_write_enable=YES\nlocal_root=/var/ftp/\nEOF\n/etc/init.d/vsftpd start\necho "Ending,Succeed!!!"\nif [ "$SYS_VERSION" == "6" ] || [ "$SYS_VERSION" == "5" ]; then\n  sed -i \'s/IPTABLES_MODULES=""/IPTABLES_MODULES="nf_conntrack_ftp"/\' /etc/sysconfig/iptables-config\n  modprobe nf_conntrack_ftp\n  iptables -I INPUT -p tcp --dport 21 -j ACCEPT\nelif [ "$SYS_VERSION" == "7" ] ;then\n  echo "Please check firewalld:stop or set rule."\nfi\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br")])]),a("p",[s._v("第二个脚本保存为create_ftp.sh，需要传递三个参数，user、password、home，会自动创建虚拟用户可直接登录 home(自定义user的根目录)。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#/bin/bash\n#create virtual ftp user.\n[ "$#" != "3" ] && ERROR\n#arg:$init_user $init_passwd $init_user_home_root\nvfu=/etc/vsftpd/vfu.list\nvfudb=/etc/vsftpd/vfu.db\nvfudir=/etc/vsftpd/vfu_dir\ncat >> $vfu <<EOF\n$1\n$2\nEOF\ndb_load -T -t hash -f $vfu $vfudb\ncat > ${vfudir}/$1 <<EOF\nwrite_enable=YES\nanon_world_readable_only=NO\nanon_upload_enable=YES\nanon_mkdir_write_enable=YES\nanon_other_write_enable=YES\nlocal_root=$3\nEOF\nchown -R ftp.ftp $3\nchmod -R a+t $3\n/etc/init.d/vsftpd reload\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);