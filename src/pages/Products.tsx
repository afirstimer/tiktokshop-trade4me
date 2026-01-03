import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Ship, 
  Package, 
  Globe, 
  FileCheck, 
  Shield, 
  Warehouse,
  Users,
  CheckCircle2,
  ArrowRight,
  Quote
} from "lucide-react";

const Products = () => {
  const services = [
    {
      icon: Ship,
      title: "Xuất khẩu đa thị trường",
      description: "Không quan trọng bạn đang xuất khẩu sang thị trường châu Á hay mở rộng sang châu Âu, Mỹ. Trade 4 Me cung cấp giải pháp linh hoạt có thể bao phủ xuất khẩu xuyên biên giới, nhiều loại hàng hóa, quốc gia... bạn đặt tên.",
    },
    {
      icon: FileCheck,
      title: "Quản lý thủ tục và hồ sơ",
      description: "Trade 4 Me đi kèm với hệ thống quản lý thủ tục và hồ sơ linh hoạt cho phép tùy chỉnh và tích hợp dễ dàng với các hệ thống khác. Dù khách hàng của bạn ở đâu, Trade 4 Me có thể hỗ trợ xử lý và quản lý toàn bộ vòng đời của lô hàng.",
    },
    {
      icon: Globe,
      title: "Giải pháp logistics linh hoạt",
      description: "Ngoài nhiều dịch vụ logistics có sẵn, bạn có khả năng dễ dàng giới thiệu các quy tắc và hành động của riêng mình. Tùy chỉnh và cấu hình logistics tự động giúp tăng hiệu quả và giảm chi phí.",
    },
  ];

  const stats = [
    { value: "5000+", label: "Lô hàng đã xử lý" },
    { value: "50+", label: "Quốc gia đối tác" },
    { value: "15+", label: "Năm kinh nghiệm" },
    { value: "98%", label: "Tỷ lệ hài lòng" },
    { value: "100+", label: "Nhân viên" },
    { value: "24/7", label: "Hỗ trợ" },
    { value: "500+", label: "Khách hàng" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Trang chủ
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Dịch vụ Xuất Nhập Khẩu</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Giải pháp Xuất Nhập Khẩu Toàn Diện
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trade 4 Me được thiết kế để trở thành trung tâm của hệ thống xuất nhập khẩu hiện đại của bạn 
                và kết nối tất cả các điểm thành một trải nghiệm tuyệt vời cho khách hàng của bạn. 
                Không cần phát minh lại bánh xe.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Kiến trúc Chuyên nghiệp
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Trade 4 Me được thiết kế để trở thành trung tâm của hệ thống xuất nhập khẩu hiện đại của bạn 
                và kết nối tất cả các điểm thành một trải nghiệm tuyệt vời cho khách hàng của bạn.
              </p>
              <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Bạn có thể sử dụng chức năng được cung cấp sẵn hoặc thay thế các phần riêng lẻ bằng tích hợp 
                với hệ thống hiện có hoặc mong muốn của bạn. Chọn giải pháp tốt nhất trong mỗi danh mục.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quy trình</h3>
                  <p className="text-muted-foreground">
                    Được xây dựng với quy trình hiện đại và phương pháp tốt nhất, đảm bảo khả năng mở rộng và dễ bảo trì.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Đáng tin cậy</h3>
                  <p className="text-muted-foreground">
                    Hệ thống đáng tin cậy với đội ngũ chuyên nghiệp và mạng lưới đối tác toàn cầu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Dịch Vụ Chính
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Giải pháp toàn diện cho mọi nhu cầu xuất nhập khẩu
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="bg-card border border-border rounded-xl p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hiệu suất và Khả năng Mở rộng Tuyệt vời
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                Trade 4 Me sẽ thích ứng với tốc độ của bạn. Bạn có thể bắt đầu nhỏ và sau đó mở rộng 
                lên hàng nghìn lô hàng mỗi tháng. Nó được thiết kế để hoạt động tốt với cơ sở hạ tầng 
                hiện đại và có thể mở rộng nhất.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Quản lý chuyên nghiệp
                </h3>
                <p className="text-muted-foreground mb-6">
                  Trade 4 Me đi kèm với hệ thống quản lý linh hoạt có thể dễ dàng thích ứng với nhu cầu 
                  tùy chỉnh của bạn và phục vụ như bảng điều khiển cho hệ thống xuất nhập khẩu của bạn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">Xem tất cả dịch vụ</Link>
                  </Button>
                  <Button variant="default" size="lg" asChild>
                    <Link to="/contact">Yêu cầu báo giá</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Comparison */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Dịch vụ Xuất Nhập Khẩu Chuyên nghiệp cho Doanh nghiệp
              </h2>
              <p className="text-lg text-center mb-12 opacity-90">
                Trade 4 Me là lựa chọn hàng đầu cho các đội ngũ chuyên nghiệp trong nước hoặc đại lý 
                cần giải pháp xuất nhập khẩu đáng tin cậy và hiệu quả.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary-foreground/10 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Dịch vụ Tiêu chuẩn</h3>
                  <p className="mb-6 opacity-90">
                    Trade 4 Me tin vào hợp tác và chia sẻ, đó là lý do tại sao chúng tôi phát triển 
                    một sản phẩm và cộng đồng đầy đam mê giúp chúng tôi định hình đổi mới.
                  </p>
                  <Button variant="heroOutline" size="lg" asChild>
                    <Link to="/services">Tìm hiểu thêm</Link>
                  </Button>
                </div>

                <div className="bg-primary-foreground/10 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Dịch vụ Cao cấp</h3>
                  <p className="mb-6 opacity-90">
                    Để hỗ trợ tốt hơn các dự án đầy thách thức, chúng tôi cung cấp phiên bản cao cấp, 
                    tiết kiệm thời gian của bạn với các tính năng được điều chỉnh cho các triển khai phức tạp.
                  </p>
                  <ul className="space-y-2 mb-6 opacity-90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Dịch vụ xuất nhập khẩu toàn diện</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Tính năng cấp doanh nghiệp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Hỗ trợ kỹ thuật có SLA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Dịch vụ khách hàng chuyên dụng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Hỗ trợ thành công dự án</span>
                    </li>
                  </ul>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Tìm hiểu thêm</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                500+ doanh nghiệp tin tưởng Trade 4 Me
              </h2>
              <div className="bg-secondary/30 rounded-xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
                  "Chúng tôi đã quyết định sử dụng Trade 4 Me vì ngày nay nó là một trong những công ty 
                  xuất nhập khẩu được sử dụng nhiều nhất trong lĩnh vực thương mại quốc tế. 
                  Điều này đã mang lại cho chúng tôi sự linh hoạt hơn để phát triển và cải thiện 
                  cả mặt trước và sau của hệ thống xuất nhập khẩu của chúng tôi."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Nguyễn Văn A</p>
                    <p className="text-sm text-muted-foreground">Giám đốc, Công ty ABC</p>
                  </div>
                </div>
              </div>
              <Button variant="default" size="lg" className="mt-8" asChild>
                <Link to="/contact">Yêu cầu báo giá</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Hệ sinh thái Phát triển
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Hệ sinh thái Trade 4 Me đang phát triển nhanh chóng với cộng đồng các nhà phát triển 
                và thương nhân đam mê làm việc chăm chỉ để cung cấp công nghệ tốt nhất trên thị trường.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">Yêu cầu báo giá</Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">Xem tất cả dịch vụ</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
